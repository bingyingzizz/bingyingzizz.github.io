# 可缩族的微分定理　`thm.differentiation-general`
定理：对可缩族，Lebesgue 微分定理仍然成立
layer 25 · 定理 · 微分定理 · 分析学

设 $f \in L^1_{loc}$，$x \in L_f$。则对**每一个**可缩地趋于 $x$ 的族 $\{E_r\}_{r>0}$：

$$\lim_{r\to0} \frac{1}{m(E_r)} \int_{E_r} |f(y) - f(x)| dy = 0, $$
$$\lim_{r\to0} \frac{1}{m(E_r)} \int_{E_r} f(y) dy = f(x)$$

## 为什么成立（入边，证明在 proofs/）
- `thm.lebesgue-set-full` Lebesgue 集几乎处处 + `def.shrinks-nicely` 可缩族：Lebesgue 集 + 可缩条件 $\implies$ 一般族的微分定理　proofs/imp.differentiation-general.md
- `def.shrinks-nicely` 可缩族：用到了定义 可缩族　proofs/def-link.shrinks-general.md
- `def.lebesgue-set` Lebesgue 集：用到了定义 Lebesgue 集　proofs/def-link.lebesgue-set-general.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.rn-pointwise` RN 导数的点态公式

refs: Folland, Real Analysis, Theorem 3.21

> 说明见 `notes/thm.differentiation-general.md`
