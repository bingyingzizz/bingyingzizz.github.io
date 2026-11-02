# 紧生成空间的指数伴随　`cor.cg-exponential-adjoint`　·　说明
根 `../`

**两个立刻的推论**：左伴随**保余极限**，所以 $X \mapsto k(X \times Y)$ 保紧生成空间的余极限；右伴随**保极限**，所以 $Z \mapsto kC(kY,Z)$ 保极限。

⭐ **余极限在 $k\mathbf{Top}$ 里是万有的。** 因为「乘 $Y$」有右伴随，它与余极限交换，这正是余极限万有（把余极限沿任意态射拉回还是余极限）的条件。**这一点在 $\mathbf{Top}$ 里不成立** —— 也是「非要在 $k\mathbf{Top}$ 里做事」的又一条理由。

**证明（伴随 = 自然双射）。** 要证的是**自然**双射
$$\operatorname{Hom}_{k\mathbf{Top}}\bigl(k(X\times Y),\ Z\bigr) \;\cong\; \operatorname{Hom}_{k\mathbf{Top}}\bigl(X,\ kC(kY, Z)\bigr).$$
- **左边**：$k$-化是余反射（含入 $i$ 有右伴随 $k$），故对紧生成的 $Z$ 有 $\operatorname{Hom}_{k\mathbf{Top}}(kA, Z) = \operatorname{Hom}_{\mathbf{Top}}(A, Z)$；

> 续见 notes/cor.cg-exponential-adjoint.2.md
