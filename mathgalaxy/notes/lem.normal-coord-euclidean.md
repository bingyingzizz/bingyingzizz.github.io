# 法坐标的欧氏性　`lem.normal-coord-euclidean`　·　说明
根 `../`

**$\Gamma(p) = 0$ 的证明**（细节在边上）：$T_{p}S$ 中过原点的每条直线 $t\mapsto tv$（$v = \cos\theta_{0}\,e_{1}+\sin\theta_{0}\,e_{2}$）在 $\exp_{p}$ 下都是测地线，坐标就是 $x^{k}(t) = tv^{k}$。代入测地线方程得 $\Gamma^{k}_{ij}(p)v^{i}v^{j} = 0$，对一切方向 $v$ 成立；于是 $\Gamma$ 的对称部分为零，而 $\Gamma$ 本来就关于下指标对称。

**$\partial_{k}g_{ij}(p) = 0$ 是它的推论**：$\partial_{k}g_{ij} = \langle \nabla_{\partial_{k}}\partial_{i},\partial_{j}\rangle+\langle \partial_{i},\nabla_{\partial_{k}}\partial_{j}\rangle = \Gamma^{\ell}_{ki}g_{\ell j}+\Gamma^{\ell}_{kj}g_{i\ell}$，在 $p$ 处为零。

⭐ **与曲率的关系**：既然 $\Gamma$ 可以在一阶上被坐标杀掉，曲率张量里唯一杀不掉的就是 $\partial\Gamma$ 那一部分，而它由 $g$ 的二阶导数决定。这就是「曲率是二阶不可去掉的度量信息」的准确含义 —— 也正是它内蕴的理由。

> 续见 notes/lem.normal-coord-euclidean.2.md
