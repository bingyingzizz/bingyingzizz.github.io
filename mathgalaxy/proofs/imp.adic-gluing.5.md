# 结构层 + 局部化的全忠实 $\implies$ $\infty$-范畴粘合
`imp.adic-gluing` · 推出 · strong 边 · 根 `../`

`thm.adic-structure-sheaf` adic 结构层是层 + `prop.analytic-base-change` 解析环的 base change → `thm.adic-gluing` 导出范畴按无穷范畴粘合

**第六步：构造逆函子。** 给定满足 1、2 的 $F$，取所有 $F_i \to F$，按第四步把覆盖细化为标准覆盖，用第三步的笛卡尔方块作转移映射。第五步的 2 保证 cocycle 条件；第一步的层性保证粘合唯一。所得 adic 空间 $X$ 满足 $\Phi(X) \cong F$，且由第二步全忠实，$X$ 在等价意义下唯一。于是 $\Phi$ 本质满，因而是范畴等价。$\blacksquare$
