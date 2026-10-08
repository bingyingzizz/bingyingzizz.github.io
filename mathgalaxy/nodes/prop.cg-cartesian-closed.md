# 紧生成空间是笛卡尔闭的　`prop.cg-cartesian-closed`
紧生成空间是笛卡尔闭范畴
layer 17 · 定理 · 紧生成空间与弱 Hausdorff · 拓扑学

设 $X, Y, Z$ 是紧生成空间。则存在同胚

$$kC\bigl(k(X \times Y),\ kZ\bigr) \;\cong\; kC\bigl(kX,\ kC(kY, kZ)\bigr).$$

等价的说法是 $k\mathbf{Top}$ 里成立 **currying**：

$$C\bigl(k(X \times Y),\ Z\bigr) \;\cong\; C\bigl(X,\ C(Y, Z)\bigr).$$

## 为什么成立（入边，证明在 proofs/）
- `def.compact-open-topology` 紧开拓扑：用到了定义 紧开拓扑　proofs/def-dep.cgcc-compactopen.md
- `def.compactly-generated` 紧生成空间：用到了定义 紧生成空间　proofs/def-dep.cgcc-cg.md

## 它能推出什么 / 谁在用它
- 被 `cor.cg-exponential-adjoint` CG 的指数伴随 用

> 说明见 `notes/prop.cg-cartesian-closed.md`
