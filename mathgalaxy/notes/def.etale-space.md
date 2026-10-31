# étale 空间　`def.etale-space`　·　说明
根 `../`

**三条立刻要记住的**：
- **纤维是离散的**：$p$ 局部同胚 $\implies$ 每个 $p^{-1}(x)$ 在 $E$ 中离散（同时也是闭的）。
- **开浸入是 étale 映射**：取 $V = E$ 就够。
- **截面的连续性可以省**：$p$ 局部同胚时，满足 $p \circ s = \mathrm{id}_{U}$ 的映射 $s : U \to E$ **自动连续**，于是「$U$ 上的截面」就是纯集合论的 $s$。

⭐ **与层的等价**：$X$ 上的层与 $X$ 上的 étale 空间构成范畴等价，函子由

$$\mathcal{F} \longmapsto \Bigl(\coprod_{x \in X} \mathcal{F}_{x} \longrightarrow X\Bigr)$$

给出：右边带「茎的拓扑」—— 每对 $(U, s)$（$U$ 开、$s \in \mathcal{F}(U)$）贡献开集 $\{\, s_{x} : x \in U \,\}$。这就是「层 = 局部同构地摊在底空间上的时空」的精确意思，也解释了为什么「推出层 / 推出开集」这类操作在 étale 空间上变成「把纤维拼起来」。

> 续见 notes/def.etale-space.2.md
