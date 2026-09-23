# 完备化后可改在零集上　`prop.completion-measurable-function`
命题：完备化空间上的可测函数，几乎处处等于一个原空间可测函数
layer 16 · 命题 · 可测函数与收敛 · 分析学

设 $(X, \mathcal{M}, \mu )$ 是测度空间，$(X, \bar{\mathcal{M}}, \bar{\mu})$ 是它的完备化（见「完备化定理」）。若 $f$ 是 $\bar{\mathcal{M}}$-可测的函数，则存在 **$\mathcal{M}$可测**的函数 $g$ 使

$$f = g\quad  \bar{\mu}-\text{a.e.}$$

## 为什么成立（入边，证明在 proofs/）
- `thm.completion` 完备化定理：完备化定理 $\implies$ 完备空间上的可测函数可改在零集上　proofs/imp.completion-measurable-function.md
- `def.null-set` 零集与完备：用到了定义 零集与完备　proofs/def-link.completion-measurable-fn.md
- `def.ae` 几乎处处：用到了定义 几乎处处　proofs/def-link.ae-completion-measurable-fn.md

refs: Folland, Real Analysis, Prop. 2.12

> 说明见 `notes/prop.completion-measurable-function.md`
