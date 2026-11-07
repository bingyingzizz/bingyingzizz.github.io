# Banach 空间都是凝聚态阿贝尔群　`prop.banach-as-condensed`　·　说明
根 `../`

**第一步：$\underline{E}$ 满足层条件。** 取有限联合满射 $\{q_i:S_i\to S\}$，验证 $\underline{E}(S)\longrightarrow \prod_i \underline{E}(S_i)\rightrightarrows \prod_{i,j}\underline{E}(S_i\times_S S_j)$ 是等化子。**单性**：若 $f,g$ 在每个 $S_i$ 上相同，则对 $s\in S$ 取 $i$ 与 $x\in S_i$ 使 $q_i(x)=s$，得 $f(s)=f(q_i(x))=g(q_i(x))=g(s)$。**粘接**：给相容的 $f_i\in C(S_i,E)$，令 $f(s):=f_i(x)$（$q_i(x)=s$）；若 $x\in S_i$、$y\in S_j$ 是同一 $s$ 的两个抬升，则 $(x,y)\in S_i\times_S S_j$，相容性给 $f_i(x)=f_j(y)$，故 $f$ 良定义。**连续性**：$q:=\coprod_i q_i:\coprod_i S_i\to S$ 是紧空间到 Hausdorff 空间的连续满射，故闭、从而是商映射；$f\circ q$ 在每一块 $S_i$ 上等于 $f_i$，连续，由商性质 $f$ 连续。最后，逐点加法与限制相容（限制是群同态），故 $\underline{E}$ 是 CHaus 上的阿贝尔群层，即 $\underline{E}\in\mathrm{CondAb}$。

> 续见 notes/prop.banach-as-condensed.3.md
