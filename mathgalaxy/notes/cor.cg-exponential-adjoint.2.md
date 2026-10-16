# CG 的指数伴随　`cor.cg-exponential-adjoint`　·　说明
根 `../`

**证明（伴随 = 自然双射）。** 要证的是**自然**双射
$$\operatorname{Hom}_{k\mathbf{Top}}\bigl(k(X\times Y),\ Z\bigr) \;\cong\; \operatorname{Hom}_{k\mathbf{Top}}\bigl(X,\ kC(kY, Z)\bigr).$$
- **左边**：$k$-化是余反射（含入 $i$ 有右伴随 $k$），故对紧生成的 $Z$ 有 $\operatorname{Hom}_{k\mathbf{Top}}(kA, Z) = \operatorname{Hom}_{\mathbf{Top}}(A, Z)$；取 $A = X\times Y$ 得左边 $= \operatorname{Hom}_{\mathbf{Top}}(X\times Y,\ Z)$。
- **右边**：同理 $\operatorname{Hom}_{k\mathbf{Top}}(X, kC(kY,Z)) = \operatorname{Hom}_{\mathbf{Top}}(X, C(kY,Z))$。
- **中间的 currying**：集合层面永远有双射 $\operatorname{Hom}_{\mathbf{Top}}(X\times Y, Z) \cong \operatorname{Hom}_{\mathbf{Top}}(X, C(Y,Z))$（把 $f$ 送到 $x\mapsto f(x,-)$）；拓扑层面，$Z$ 紧生成时「连续性可由紧 Hausdorff 块检验」，而 $kY$ 的紧块就是 $Y$ 的紧块，故 $C(Y,Z)$ 与 $C(kY,Z)$ 上的紧开拓扑一致。
两条合起来给出自然双射，即 $k(X\times Y) \dashv kC(kY, -)$。∎
**顺带的两个推论**（伴随

> 续见 notes/cor.cg-exponential-adjoint.3.md
