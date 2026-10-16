# 上同调与不交并　`prop.cohomology-of-coproduct`　·　说明
根 `../`

**证明。** 取 $M$ 的**内射消解** $I^{\bullet}$ ✓。截面函子把不交并送成**积**：
$$\Gamma\Bigl(\coprod_{i} X_{i},\ -\Bigr) \;=\; \prod_{i} \Gamma(X_{i},\ -) ✓$$
（从余积出发的映射恰是一族相容的映射；等价地，$\Gamma(X, -) = \operatorname{Hom}(h_{X}, -)$ 而 $h$ 保余积。）于是
$$\Gamma\Bigl(\coprod_{i} X_{i},\ I^{\bullet}\Bigr) = \prod_{i} \Gamma(X_{i},\ I^{\bullet}) ✓$$
在 $\mathbf{Ab}$ 里**积是正合的**，所以逐项取积不影响上同调的计算：
$$H^{n}\Bigl(\Gamma\bigl(\coprod_{i} X_{i},\ I^{\bullet}\bigr)\Bigr) \cong \prod_{i} H^{n}\bigl(\Gamma(X_{i},\ I^{\bullet})\bigr) = \prod_{i} H^{n}(X_{i},\ M) ✓$$
（每个 $\Gamma(X_{i}, I^{\bullet})$ 都算 $H^{n}(X_{i}, M)$：$I^{\bullet}$ 逐项内射，对**每个**测试对象 $X_{i}$ 仍然给出消解。）∎

⭐ 一句话：**不交并这一侧是积**。离散空间上的零调（$H^{n}(\coprod_{e} *, M) = \prod_{e} H^{n}(*, M) = 0$）就是它的直接推论。
