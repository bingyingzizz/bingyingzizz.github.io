# 一般正合列　`def.exact-sequence`
正合列
layer 16 · 定义 · 加法与阿贝尔范畴 · 同调代数+范畴论
[在星图里打开](../#n=def.exact-sequence)　·　[节点索引](../index.md)

设

$$\cdots \longrightarrow M^{n-1} \xrightarrow{\ d^{n-1}\ } M^{n} \xrightarrow{\ d^{n}\ } M^{n+1} \longrightarrow \cdots$$

是阿贝尔范畴中的复形（$d^{n} \circ d^{n-1} = 0$）。称它在 $M^{n}$ 处**正合**，如果

$$\operatorname{im}(d^{n-1}) = \ker(d^{n}).$$

处处正合的复形叫**正合列**。特别地，**短正合列**

$$0 \longrightarrow M' \xrightarrow{\ f\ } M \xrightarrow{\ g\ } M'' \longrightarrow 0$$

意思是：$f$ 是单态射、$g$ 是满态射，且 $\operatorname{im}(f) = \ker(g)$。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.exact-sequence.2.md](./def.exact-sequence.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.exact-sequence.3.md](./def.exact-sequence.3.md)

refs: Le Stum, Definition 5.2.3

> 说明见 `notes/def.exact-sequence.md`

引用：`def.exact-sequence`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
