# L^p 是 Banach 空间　`thm.lp-banach`
定理（Riesz–Fischer）：$1 \le p < \infty$ 时 $L^p$ 完备
layer 20 · 定理 · L^p 空间 · 分析学

设 $1 \le p < \infty$。则 $L^p(X, \mathcal{M}, \mu)$ 关于范数 $\|\cdot\|_p$ 是**完备**的，即它是一个 **Banach 空间**。

## 为什么成立（入边，证明在 proofs/）
- `thm.minkowski` Minkowski 不等式 + `thm.mct` 单调收敛定理 + `thm.dct` 控制收敛定理：三角不等式 + MCT + DCT $\implies$ $L^p$ 完备　proofs/imp.lp-banach.md
- `def.lp-norm` L^p 范数：用到了定义 L^p 范数　proofs/def-link.lp-banach.md

refs: Folland, Real Analysis, Theorem 6.6

> 说明见 `notes/thm.lp-banach.md`
