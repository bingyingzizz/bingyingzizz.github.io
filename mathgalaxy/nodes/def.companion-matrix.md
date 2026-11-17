# 友矩阵　`def.companion-matrix`
友矩阵：循环模的标准矩阵
layer 15 · 定义 · 特征值与 Jordan 型 · 抽象代数
[在星图里打开](../#n=def.companion-matrix)　·　[节点索引](../index.md)

设 $K$ 是域，$d(x)=x^m+a_{m-1}x^{m-1}+\cdots+a_0\in K[x]$ 首一、$m\ge1$。其**友矩阵**是
$C_d=\begin{pmatrix}0&0&\cdots&0&-a_0\\ 1&0&\cdots&0&-a_1\\ 0&1&\cdots&0&-a_2\\ \vdots& &\ddots& &\vdots\\ 0&0&\cdots&1&-a_{m-1}\end{pmatrix}\in M_m(K),$
即次对角线全为 $1$、最后一列为 $(-a_0,
> 陈述续见 [nodes/def.companion-matrix.2.md](./def.companion-matrix.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.companion-matrix.3.md](./def.companion-matrix.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.companion-matrix.4.md](./def.companion-matrix.4.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 7；Dummit–Foote, Abstract Algebra, Ch. 12；Lang, Algebra, Ch. XIV

> 说明见 `notes/def.companion-matrix.md`

引用：`def.companion-matrix`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
