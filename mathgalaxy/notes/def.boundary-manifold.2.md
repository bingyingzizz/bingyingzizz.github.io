# 带边流形　`def.boundary-manifold`　·　说明
根 `../`

**边界不是「拓扑边界」**：$\partial M$ 是内蕴的一层 $(n-1)$ 维皮，与有没有谁来包着 $M$ 无关；拓扑意义上的边界要靠 $M$ 先嵌在某个空间里才谈得上。两者只在**同维、且以「带边方式」嵌入**时才碰头：$S^{1} \subset \mathbb{R}^{2}$ 是嵌入，内蕴 $\partial S^{1} = \emptyset$，而它在 $\mathbb{R}^{2}$ 里的拓扑边界是整条 $S^{1}$。

**⚠️ 定向的约定（只在用到时交代）**：$\partial M$ 的**诱导定向**取「外法向在前」—— 若 $(v_{1},\ldots,v_{n-1})$ 是 $T_{p}\partial M$ 的基，它为正，当且仅当 $(N,v_{1},\ldots,v_{n-1})$ 是 $T_{p}M$ 的正向基，$N$ 是外单位法向。

取 $\mathbb{H}^{n}$ 的标准坐标时，这条等价于「用 $x^{1},\ldots,x^{n-1}$ 的次序当定向，但与诱导定向差 $(-1)^{n-1}$」。

这个符号在 `prop.boundary-sign-convention` 里会再出现一次，两处必须一致。

> 续见 notes/def.boundary-manifold.3.md
