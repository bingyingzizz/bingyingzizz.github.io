# 局部流　`thm.flow-local`　·　续页（第 2 页）
[在星图里打开](../#n=thm.flow-local)　·　第 1 页 [nodes/thm.flow-local.md](./thm.flow-local.md)

## 陈述（续）
设 $X \in \mathfrak{X}(M)$，$p \in M$。则存在 $p$ 的开邻域 $U$、$\varepsilon > 0$ 与光滑映射 $\varphi : (-\varepsilon,\varepsilon)\times U \to M$，使
1. $\varphi_{0} = \operatorname{id}_{U}$；
2. $\dfrac{\partial}{\partial t}\varphi_{t}(q) = X\bigl(\varphi_{t}(q)\bigr)$ 对一切 $t \in (-\varepsilon,\varepsilon)$、$q \in U$ 成立；
3. **唯一性**：过同
一点的两条积分曲线在公共定义区间上相同；
4. **局部单参数群**：$|s|, |t|, |s+t| < \varepsilon$ 且中间点都落在 $U$ 内时，$\varphi_{s+t} = \varphi_{s}\circ\varphi_{t}$。
并且把各点的局部流沿曲线拼接，得到唯一的**极大流**（定义域 $\mathcal{W} \subseteq \mathbb{R}\times M$ 开，见 `def.flow`）。

> 续见 [nodes/thm.flow-local.3.md](./thm.flow-local.3.md)
