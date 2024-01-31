{
  description = "Shell env for blog";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
  };

  outputs = inputs @ {flake-parts, ...}:
    flake-parts.lib.mkFlake {inherit inputs;} {
      imports = [];
      systems = ["x86_64-linux" "aarch64-linux" "aarch64-darwin" "x86_64-darwin"];
      perSystem = {
        config,
        self',
        inputs',
        pkgs,
        system,
        ...
      }: {
        # Per-system attributes can be defined here. The self' and inputs'
        # module parameters provide easy access to attributes of the same
        # system.
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [hut php phpPackages.composer nodejs_20 pre-commit];
          shellHook = ''
            ${pkgs.pre-commit}/bin/pre-commit install
          '';
        };
        formatter = pkgs.alejandra;
      };
      flake = {};
    };
}
