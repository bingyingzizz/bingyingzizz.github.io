# 单位与余单位　`def.adjunction-unit`
单位与余单位（Unit and Counit）
layer 10 · 定义 · 伴随与反射 · 范畴论
[在星图里打开](../#n=def.adjunction-unit)　·　[节点索引](../index.md)

设 $F \dashv G$，记那个自然同构为

$$\Phi_{X, Y} : \operatorname{Hom}_{\mathcal{D}}\bigl(F(X), Y\bigr) \longrightarrow \operatorname{Hom}_{\mathcal{C}}\bigl(X, G(Y)\bigr)$$

把它在两个「恒等态射」上取值，得到两个自然变换：

$$\eta_{X} := \Phi_{X, F(X)}(1_{F(X)}) : X \to G F(X) \qquad (\textbf{单位})$$
> 陈述续见 [nodes/def.adjunction-unit.2.md](./def.adjunction-unit.2.md)


## 它能推出什么 / 谁在用它
- ⇒ [`prop.adjoint-full-faithful`](../nodes/prop.adjoint-full-faithful.md) 全忠实与单位

- …另有出边，续页见 [nodes/def.adjunction-unit.4.md](./def.adjunction-unit.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.adjunction-unit.3.md](./def.adjunction-unit.3.md)

refs: Le Stum, An introduction to condensed mathematics, §1.5

> 说明见 `notes/def.adjunction-unit.md`

引用：`def.adjunction-unit`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
