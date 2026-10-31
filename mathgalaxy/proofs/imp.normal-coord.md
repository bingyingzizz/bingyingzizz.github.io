# imp.normal-coord
`imp.normal-coord` · 推出 · strong 边 · 根 `../`

`def.exponential-map` 指数映射 → `lem.normal-coord-euclidean` 法坐标的欧氏性

**$g_{ij}(p) = \delta_{ij}$** 就是 $(\mathrm{d}\exp_{p})_{0} = \mathrm{id}$ 在坐标下的写法：基向量 $e_{i}$ 被送到 $\partial_{i}|_{p}$。
**$\Gamma^{k}_{ij}(p) = 0$。** $T_{p}S$ 中过原点的直线 $t\mapsto tv$ 在 $\exp_{p}$ 下是测地线，其中 $v = \cos\theta_{0}\,e_{1}+\sin\theta_{0}\,e_{2}$。它在法坐标下的分量就是 $x^{k}(t) = tv^{k}$，于是 $\dot x^{i} = v^{i}$、$\ddot x^{k} = 0$。代入测地线方程得
$$\Gamma^{k}_{ij}(p)v^{i}v^{j} = 0,$$
对一切方向 $v$ 都要成立。
把 $v$ 换成 $v+w$ 再与 $v$、$w$ 两式相减，得 $\Gamma^{k}_{ij}(p)(v^{i}w^{j}+w^{i}v^{j}) = 0$；任取单位方向即得 $\Gamma^{k}_{ij}(p)+\Gamma^{k}_{ji}(p) = 0$，也就是说 $\Gamma^{k}_{ij}(p)$ 的对称部分为零。而 $\Gamma^{k}_{ij}$ 本来就关于 $i,j$ 对称（无挠），故 $\Gamma^{k}_{ij}(p) = 0$。
**$\partial_{k}g_{ij}(p) = 0

> 续见 proofs/imp.normal-coord.2.md
