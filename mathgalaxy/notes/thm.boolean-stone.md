# Boolean 环与 Stone 空间等价　`thm.boolean-stone`　·　说明
根 `../`

**为什么 $\operatorname{Spec}$ 落在 Stone 空间里。** $\operatorname{Spec}(B) \subseteq \mathbb{F}_{2}^{B}$ 是乘积空间的闭子集，而 $\mathbb{F}_{2}$ 有限离散 —— 于是 $\operatorname{Spec}(B)$ 紧、Hausdorff、全不连通，正是 Stone 空间。

**为什么只用到 $\mathbb{F}_{2}$。** 布尔环上，每个素理想都**自动是极大理想**：商 $B/\mathfrak{p}$ 是整环，而整环里的幂等元只能是 $0$ 或 $1$，于是它就是 $\mathbb{F}_{2}$。所以 $\operatorname{Spec}(B) = \operatorname{MaxSpec}(B)$ —— Zariski 拓扑退化成 Stone 拓扑，没有「非闭点」这种麻烦。

**两个必记的对应**：$B = \mathbb{F}_{2}$ 对应单点空间；$B = \mathcal{P}(I)$ 对应 $\beta I$（$I$ 的 Stone–Čech 紧化）—— 幂集对应的正是「最自由」的紧化。

> 续见 notes/thm.boolean-stone.2.md
