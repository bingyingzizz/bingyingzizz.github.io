# 群的基本性质　`prop.group-basic`
命题：群的消去律与逆的公式
layer 7 · 命题 · 代数结构 · 抽象代数
[在星图里打开](../#n=prop.group-basic)　·　[节点索引](../index.md)

设 $G$ 是群，$a, b, c \in G$。则：

**(i) 消去律**：$ab = ac \implies b = c$，$ba = ca \implies b = c$；

**(ii) 逆的公式**：$(ab)^{-1} = b^{-1}a^{-1}$，$(a^{-1})^{-1} = a$，$e^{-1} = e$；

**(iii)** 对 $m, n \in \mathbb{Z}$：$a^{m}a^{n} = a^{m+n}$，$(a^{m})^{n} = a^{mn}$，$a^{0} = e$。

## 为什么成立（入边，证明在 proofs/）
- [`def.group`](../nodes/def.group.md) 群：群公理 $\implies$ 消去律与逆公式　[proofs/imp.group-basic.md](../proofs/imp.group-basic.md)

refs: Lang, Algebra, Ch. I

> 说明见 `notes/prop.group-basic.md`

引用：`prop.group-basic`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
