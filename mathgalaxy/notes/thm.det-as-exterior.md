# 行列式 = 最高外幂上的作用　`thm.det-as-exterior`　·　说明
根 `../`

⭐ 这条定理把行列式的三条公理**一次性地解释掉了**：
- 多重线性 $\Longleftarrow$ $\wedge$ 对每个变元线性；
- 交错性 $\Longleftarrow$ $v \wedge v = 0$（商空间的构造）；
- 规范性 $\Longleftarrow$ 取 $v_i = e_i$ 时 $e_1 \wedge \cdots \wedge e_n$ 是基、系数定为 $1$。

⭐ 于是 `thm.det-exists-unique` 的「存在唯一性」变成了「一维空间上的线性映射只能乘一个数」——**同一个定理的第二种证明**，而且是概念上更干净的那种。

⭐ 它同时说明：$\det$ 是**换基不变的**（因为 $\bigwedge^{n}T$ 不依赖基）、$\det(AB) = \det A \det B$（函子性：$\bigwedge^{n}(AB) = \bigwedge^{n}A \circ \bigwedge^{n}B$，而一维空间上映射的复合就是乘法）—— `thm.det-multiplicative` 也是一条推论。
