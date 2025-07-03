# ZapCircle Review

**Run behavior-aware, LLM-powered code reviews using ZapCircle.**  
Supports OpenAI, Anthropic, and Google models with full local control.

ZapCircle Review will review the code changes in your pull request, and give you line-by-line feedback, as well as an overall code quality review.

---

**ZapCircle Review** uses AI with deep code + behavior context to review your PRs with precision.

✅ Behavior-aware prompts  
✅ Supports OpenAI (gpt-4o), Anthropic, Google  
✅ Works with `npx zapcircle review`  
✅ Easy to pin to a specific version  
✅ Uses just your code and your chosen LLM

---

## 🔧 Example Usage

```yaml
- name: ZapCircle Review
  uses: ZapCircleHQ/review-action@v1
  with:
    provider: openai
    model: gpt-4o
    zapcircleVersion: 0.2.7
    OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
```

---

## Important Note

You will want to make sure your checkout uses a `fetch-depth` so that it includes your `origin/main` branch, such as this:

```yaml
    steps:
      - name: Checkout Repo
        uses: actions/checkout@v3
        with:
            fetch-depth: 0
```

---

## Inputs

| Name               | Description                          | Default    |
|--------------------|--------------------------------------|------------|
| `provider`         | `openai`, `anthropic`, or `google`   | `openai`   |
| `model`            | LLM model name                       | `gpt-4o`   |
| `zapcircleVersion` | ZapCircle version to run             | `latest`   |
| `OPENAI_API_KEY`   | API key (via `secrets`)              | *(optional)* |
| `ANTHROPIC_API_KEY`| API key (via `secrets`)              | *(optional)* |
| `GOOGLE_API_KEY`   | API key (via `secrets`)              | *(optional)* |
| `baseUrl`          | Optional custom API URL              | *(optional)* |

---

## 🔗 Learn More

- GitHub: [jefflinwood/zapcircle](https://github.com/jefflinwood/zapcircle)  
- Docs: [zapcircle.com](https://zapcircle.com)
