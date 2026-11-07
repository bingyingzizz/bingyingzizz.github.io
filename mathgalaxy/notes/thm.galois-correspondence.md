# 伽罗瓦基本定理　`thm.galois-correspondence`　·　说明
根 `../`

**证明**：核心是 Artin 定理（有限自同构群的阶 = 大域对固定域的次数）。先证三个引理，再逐条推。记 $K^{H} := \{x\in K : \sigma(x)=x\ \text{对一切}\ \sigma\in H\}$。

**引理 1（Dedekind 线性无关）**：域 $K$ 的两两不同的自同构 $\sigma_{1},\ldots,\sigma_{n}$，作为 $K\to K$ 的函数，在 $K$ 上线性无关。证明：设 $\sum_{i}c_{i}\sigma_{i}=0$ 是非零关系、非零系数个数 $r$ 最少；则 $r\ge 2$ 且 $c_{1},\ldots,c_{r}\ne 0$（重排后）。取 $x\in K$ 使 $\sigma_{1}(x)\ne\sigma_{2}(x)$。对任意 $y$，把关系作用在 $xy$ 上得 $\sum c_{i}\sigma_{i}(x)\sigma_{i}(y)=0$，再减去 $\sigma_{1}(x)\sum c_{i}\sigma_{i}(y)=0$，得 $\sum_{i\ge 2}c_{i}\bigl(\sigma_{i}(x)-\sigma_{1}(x)\bigr)\sigma_{i}(y)=0.$ 这是非零关系（$i=2$ 项系数 $c_{2}(\sigma_{2}(x)-\sigma_{1}(x))\ne 0$），非零系数个数 $\le r-1$，矛盾。

> 续见 notes/thm.galois-correspondence.2.md
