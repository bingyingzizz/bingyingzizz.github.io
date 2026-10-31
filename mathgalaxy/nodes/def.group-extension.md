# 群扩张　`def.group-extension`
群扩张 $1 \to A \to E \to G \to 1$
layer 8 · 定义 · 群上同调 · 同调代数+抽象代数
[在星图里打开](../#n=def.group-extension)　·　[节点索引](../index.md)

设 $A$ 是阿贝尔群。$A$ 被 $G$ 的**扩张**是短正合列

$$1 \longrightarrow A \xrightarrow{\ i\ } E \xrightarrow{\ \pi\ } G \longrightarrow 1 .$$

于是 $i(A) \trianglelefteq E$ 是 $E$ 的正规阿贝尔子群、$G \cong E/i(A)$。$A$ 上的 $G$-模结构取**共轭作用**

$$g \cdot a := \tilde g\, a\, \tilde g^{-1}, \qquad \tilde g \in \pi^{-1}(g),$$
> 陈述续见 [nodes/def.group-extension.2.md](./def.group-extension.2.md)


## 它能推出什么 / 谁在用它
- ⇒ [`thm.h2-group-extensions`](../nodes/thm.h2-group-extensions.md) 二维上同调分类群扩张

- …另有出边，续页见 [nodes/def.group-extension.4.md](./def.group-extension.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.group-extension.3.md](./def.group-extension.3.md)

refs: Weibel, An Introduction to Homological Algebra, Chapter 6（群扩张）

> 说明见 `notes/def.group-extension.md`

引用：`def.group-extension`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
