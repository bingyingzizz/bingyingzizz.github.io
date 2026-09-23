# Lebesgue 集几乎处处　`thm.lebesgue-set-full`
定理：$f \in L^{1}_{\text{loc}} \implies m(L_f^{c}) = 0$
layer 24 · 定理 · 微分定理 · 分析学

若 $f \in L^1_{loc}$，则

$$m(L_f^c) = 0$$

即：**几乎每个点都是 Lebesgue 点**。

## 为什么成立（入边，证明在 proofs/）
- `thm.lebesgue-differentiation` Lebesgue 微分定理：微分定理 + 可数稠密子集 $\implies$ Lebesgue 集几乎处处　proofs/imp.lebesgue-set.md
- `def.lebesgue-set` Lebesgue 集：用到了定义 Lebesgue 集　proofs/def-link.lebesgue-set-thm.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.differentiation-general` 可缩族的微分定理

refs: Folland, Real Analysis, Theorem 3.20

> 说明见 `notes/thm.lebesgue-set-full.md`
