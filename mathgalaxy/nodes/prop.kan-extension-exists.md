# 有余极限时 Kan 延拓总存在　`prop.kan-extension-exists`
命题：$\mathcal{D}$ 有余极限 $\implies$ 沿 $p$ 的左 Kan 延拓总存在
layer 13 · 命题 · 伴随与反射 · 范畴论
[在星图里打开](../#n=prop.kan-extension-exists)　·　[节点索引](../index.md)

若 $\mathcal{D}$ 有**所有小余极限**，则任意 $F : \mathcal{C} \to \mathcal{D}$ 沿任意 $p : \mathcal{C} \to \mathcal{C}'$ 的**左 Kan 延拓总存在**，并可由**逐点公式**算出：

$$(p_{!}F)(X') \;=\; \varinjlim_{p(X) \to X'} F(X),$$
> 陈述续见 [nodes/prop.kan-extension-exists.2.md](./prop.kan-extension-exists.2.md)


## 它能推出什么 / 谁在用它
- ⇒ [`thm.induced-topos-morphism`](../nodes/thm.induced-topos-morphism.md) 任意函子诱导拓扑斯态射

- …另有出边，续页见 [nodes/prop.kan-extension-exists.4.md](./prop.kan-extension-exists.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/prop.kan-extension-exists.3.md](./prop.kan-extension-exists.3.md)

refs: Le Stum, An introduction to condensed mathematics, Proposition 1.5.11

> 说明见 `notes/prop.kan-extension-exists.md`

引用：`prop.kan-extension-exists`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
