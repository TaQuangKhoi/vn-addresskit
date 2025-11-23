# Contributing to vn-addresskit

Thank you for your interest in contributing to vn-addresskit! This document provides guidelines for contributing to the project.

## Getting Started

### Prerequisites

- Node.js >= 16.0.0
- pnpm (automatically used via packageManager field in package.json)

### Setup Development Environment

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/vn-addresskit.git
   cd vn-addresskit
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

4. Build the project:
   ```bash
   pnpm run build
   ```

## Development Workflow

### Making Changes

1. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bugfix-name
   ```

2. Make your changes in the `src/` directory

3. Build the project to ensure it compiles:
   ```bash
   pnpm run build
   ```

4. Test your changes (when tests are available):
   ```bash
   pnpm test
   ```

### Code Style

- Follow TypeScript best practices
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Ensure code is properly typed (no `any` types unless absolutely necessary)
- Keep functions small and focused

### Commit Messages

Use clear and descriptive commit messages:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

Examples:
```
feat: add support for searching by English names
fix: handle null response from API gracefully
docs: update README with new examples
```

## Submitting Changes

### Pull Request Process

1. Ensure your code builds successfully:
   ```bash
   pnpm run build
   ```

2. Update the CHANGELOG.md with your changes

3. Push your branch to GitHub:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a Pull Request on GitHub with:
   - Clear title describing the change
   - Description of what changed and why
   - Any related issue numbers

5. Wait for review and address any feedback

### Pull Request Guidelines

- Keep PRs focused on a single feature or fix
- Include relevant tests (when test infrastructure exists)
- Update documentation as needed
- Ensure CI passes
- Be responsive to feedback

## Reporting Issues

### Bug Reports

When reporting bugs, please include:

- Clear description of the issue
- Steps to reproduce
- Expected behavior
- Actual behavior
- Environment details (Node.js version, OS, etc.)
- Code samples if applicable

### Feature Requests

When suggesting new features, please:

- Clearly describe the feature
- Explain the use case and benefits
- Consider backward compatibility
- Provide examples of how it would be used

## Code of Conduct

### Our Standards

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive criticism
- Accept gracefully when others disagree

### Unacceptable Behavior

- Harassment or discriminatory language
- Trolling or insulting comments
- Personal or political attacks
- Publishing others' private information

## Questions?

If you have questions about contributing, feel free to:

- Open an issue on GitHub
- Reach out to the maintainers

## License

By contributing to vn-addresskit, you agree that your contributions will be licensed under the MIT License.

Thank you for contributing! 🎉
