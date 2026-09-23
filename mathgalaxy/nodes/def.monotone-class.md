# 单调类　`def.monotone-class`
单调类（Monotone Class）
layer 2 · 定义 · 集合族与 σ-代数 · 分析学

$\mathfrak{A} \subseteq \mathcal{P}(X)$ 是**单调类**，当且仅当它对两种单调极限都封闭：

$$\{E_j\}_{j=1}^{\infty} \nearrow  \implies \bigcup_{j=1}^{\infty} E_j \in \mathfrak{A}$$
$$\{E_j\}_{j=1}^{\infty} \searrow  \implies \bigcap_{j=1}^{\infty} E_j \in \mathfrak{A}$$

## 为什么成立（入边，证明在 proofs/）
- `def.subset` 子集：用到了定义 子集　proofs/def-dep.subset-monotone-class.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.ring-monotone-sigma` 环 → σ-环 的判据
- 被 `thm.ring-monotone-sigma` 环 → σ-环 的判据 用
- 被 `thm.monotone-class` 单调类定理 用
- 被 `thm.product-measure-sections` 乘积测度由截口给出 用
- 被 `def.generated-sigma` 生成的 σ-代数 用

refs: Halmos, Measure Theory, §6

> 说明见 `notes/def.monotone-class.md`
