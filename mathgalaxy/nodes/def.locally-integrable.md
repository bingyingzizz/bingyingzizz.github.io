# 局部可积　`def.locally-integrable`
局部可积函数 $L^{1}_{\text{loc}}$
layer 19 · 定义 · 微分定理 · 分析学

可测函数 $f : \mathbb{R}^n \to \mathbb{C}$ 是**局部可积的**，当且仅当

$$\int_K |f(x)| dx < \infty\quad \text{ 对每个有界可测集} K \subseteq \mathbb{R}^n$$

局部可积函数全体记作 $L^1_{loc}$（或 $L^1_{loc}(\mathbb{R}^n)$）。

## 为什么成立（入边，证明在 proofs/）
- `def.measurable-function` 可测函数：用到了定义 可测函数　proofs/def-dep.measurable-fn-locally-integrable.md
- `def.integrable` 可积 / L¹：用到了定义 可积 / L¹　proofs/def-dep.integrable-locally-integrable.md

## 它能推出什么 / 谁在用它
- 被 `def.average-operator` 平均算子 Aᵣ 用
- 被 `def.maximal-function` 极大函数 用
- 被 `thm.rn-pointwise` RN 导数的点态公式 用
- 被 `lem.average-continuous` 平均算子联合连续 用
- 被 `def.lebesgue-set` Lebesgue 集 用

refs: Folland, Real Analysis, §3.4

> 说明见 `notes/def.locally-integrable.md`
