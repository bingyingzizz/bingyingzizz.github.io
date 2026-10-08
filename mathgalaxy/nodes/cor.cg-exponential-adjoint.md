# CG 的指数伴随　`cor.cg-exponential-adjoint`
$X \mapsto k(X \times Y) \;\dashv\; Z \mapsto kC(kY, Z)$
layer 18 · 推论 · 紧生成空间与弱 Hausdorff · 拓扑学

在紧生成空间范畴上，函子

$$X \longmapsto k(X \times Y) \qquad \text{左伴随于} \qquad Z \longmapsto kC(kY, Z).$$

也就是说 $kC(kY, -)$ 是「乘 $Y$」的**右伴随**（$k(Y \times -)$ 叫**指数对象** $Z^{Y}$）。

## 为什么成立（入边，证明在 proofs/）
- `prop.cg-cartesian-closed` 紧生成空间是笛卡尔闭的：用到了定义 紧生成空间是笛卡尔闭的　proofs/def-dep.cgexp-cc.md
- `def.adjoint` 伴随函子：用到了定义 伴随函子　proofs/def-dep.cgexp-adjoint.md

> 说明见 `notes/cor.cg-exponential-adjoint.md`
