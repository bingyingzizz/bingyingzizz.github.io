# 截面曲率　`def.sectional-curvature`　·　续页（第 2 页）
[在星图里打开](../#n=def.sectional-curvature)　·　第 1 页 [nodes/def.sectional-curvature.md](./def.sectional-curvature.md)

## 陈述（续）
设 $(M,g)$ 是黎曼流形，$p\in M$，$\sigma\subseteq T_{p}M$ 是二维子空间，$X,Y$ 是 $\sigma$ 的一组基。**截面曲率**定义为

$$K(\sigma) := \frac{\langle R(X,Y)Y,X\rangle}{\langle X,X\rangle\langle Y,Y\rangle-\langle X,Y\rangle^{2}} ,$$
它与 $\sigma$ 的基的选取无关（换基时分子分母同乘行列式的平方）。若 $X,Y$ 是单位正交基，则

$$K(\sigma) = \langle R(X,Y)Y,X\rangle = R_{1221}\qquad (X = e_{1},\ Y = e_{2}).$$
当 $\dim M = 2$ 时只有一个二维截面（$T_{p}M$ 本身），$K$ 就是**高斯曲率**。若 $K(\sigma)$ 与 $\sigma$ 无关（记作**常截面曲率** $K$），则

$$R(X,Y)Z = K\bigl(\langle Y,Z\rangle X-\langle X,Z\rangle Y\bigr).$$

> 续见 [nodes/def.sectional-curvature.3.md](./def.sectional-curvature.3.md)
