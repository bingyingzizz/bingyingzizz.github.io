# 单纯对象　`def.simplicial`　·　说明
根 `../`

把 $[n]$ 画成一个顶点数 $n+1$ 的标准单纯形，面映射就是「贴一个面」，退化映射就是「把一个顶点压扁」。

于是 $\Delta$ 是「所有标准单纯形及其贴合方式」的骨架，$\Delta^{\mathrm{op}} \to \mathcal{C}$ 的一个图就是把一串层层相套的单纯形安进 $\mathcal{C}$ 里 —— 这是把空间编码成代数数据的最省事的办法。

**展开写法**：记 $X_{n} := X([n])$，并把 $\Delta^{\mathrm{op}}$ 里的箭头反向后记为

$$d_{i} := X(\delta^{i}) : X_{n} \longrightarrow X_{n-1}, \qquad s_{i} := X(\sigma^{i}) : X_{n} \longrightarrow X_{n+1}.$$

它们满足与单纯恒等式对偶的**面-退化关系**：

- $d_{i} d_{j} = d_{j-1} d_{i}$（$i < j$）；

- $s_{i} s_{j} = s_{j-1} s_{i}$（$i < j$）；

- $d_{i} s_{j} = s_{j-1} d_{i}$（$i < j$）；

- $d_{i} s_{j} = 1$（$i = j$ 或 $i = j+1$）；

- $d_{i} s_{j} = s_{j} d_{i-1}$（$i > j+1$）。

> 续见 notes/def.simplicial.2.md
