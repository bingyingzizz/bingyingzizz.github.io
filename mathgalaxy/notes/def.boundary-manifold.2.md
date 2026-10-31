# 带边流形　`def.boundary-manifold`　·　说明
根 `../`

**⚠️ 定向的约定（只在用到时交代）**：$\partial M$ 的**诱导定向**取「外法向在前」—— 若 $(v_{1},\ldots,v_{n-1})$ 是 $T_{p}\partial M$ 的基，它为正，当且仅当 $(N,v_{1},\ldots,v_{n-1})$ 是 $T_{p}M$ 的正向基，$N$ 是外单位法向。取 $\mathbb{H}^{n}$ 的标准坐标时，这条等价于「用 $x^{1},\ldots,x^{n-1}$ 的次序当定向，但与诱导定向差 $(-1)^{n-1}$」。这个符号在 `prop.boundary-sign-convention` 里会再出现一次，两处必须一致。

**⚠️ 边界的边界是空的**：$\partial(\partial M) = \emptyset$，因为 $\partial M$ 是无边流形（它的卡值域落在 $\mathbb{R}^{n-1}$ 的开集里）。这一条让 Stokes 型公式能反复用而不会冒出「边界的边界」那一项。
