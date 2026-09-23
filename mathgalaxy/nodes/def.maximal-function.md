# 极大函数　`def.maximal-function`
Hardy–Littlewood 极大函数 Hf
layer 21 · 定义 · 微分定理 · 分析学

设 $f \in L^1_{loc}$。定义

$$Hf(x) := \sup_{r > 0} \frac{1}{m(B(r, x))} \int_{B(r, x)} |f(y)| dy = \sup_{r > 0} A_r |f|(x)$$

称为 $f$ 的 **Hardy–Littlewood 极大函数**。

## 为什么成立（入边，证明在 proofs/）
- `def.average-operator` 平均算子 Aᵣ：用到了定义 平均算子 Aᵣ　proofs/def-link.average-maximal.md
- `def.locally-integrable` 局部可积：用到了定义 局部可积　proofs/def-link.locally-maximal.md
- `def.finchar` 有限特征：用一个「更粗但可控」的量，把无穷握在手里　proofs/ana.coarse-control.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.maximal-theorem` 极大定理
- 被 `thm.maximal-theorem` 极大定理 用
- ～弱边 `def.finchar` 有限特征

refs: Folland, Real Analysis, §3.4

> 说明见 `notes/def.maximal-function.md`
