# imp.van-kampen
`imp.van-kampen` · 推出 · strong 边 · 根 `../`

`def.fundamental-group` 基本群 + `def.lebesgue-number` 勒贝格数 + `def.path-homotopy` 道路同伦 + `def.normal-subgroup` 正规子群 → `thm.van-kampen` van Kampen 定理

**第三步（定义 $\Psi$ 并证良定义）**：对 $X$ 中从 $x_{0}$ 到 $x_{0}$ 的闭道路 $\alpha$，按第一步取分解，把对应的字（每个因子按它所在的 $U$ 或 $V$ 取类）记为 $W(\alpha) \in P$。需要证明 $W(\alpha)$ 不依赖分解，且在定端同伦下不变。

**3a（细分不变）**：两个分解有公共细分（取并集分点）。只需检查「把一个 $U$-段或 $V$-段再切开一点」不改变 $W$。设 $\alpha_{i}$ 落在 $U$，在 $y = \alpha(s)$ 处切开。取 $U$ 中的连接道路 $\beta_{y}$（从 $x_{0}$ 到 $y$；$y \in U$ 而 $U$ 道路连通），必要时也可取在 $U \cap V$ 中。在 $\pi_{1}(U)$ 中有

$$\beta_{i-1}^{-1}\alpha_{i}\beta_{i} \;=\; \big(\beta_{i-1}^{-1}\alpha_{i}^{\prime}\beta_{y}\big)\big(\beta_{y}^{-1}\alpha_{i}^{\prime\prime}\beta_{i}\big),$$

> 续见 proofs/imp.van-kampen.7.md
