# 不变量函子　`def.invariant-functor`
不变量函子 $(-)^{G}$
layer 10 · 定义 · 群上同调 · 同调代数+抽象代数
[在星图里打开](../#n=def.invariant-functor)　·　[节点索引](../index.md)

设 $M$ 是 $G$-模。对 $g \in G$ 记 $g - 1 : M \to M$ 为 $R$-线性映射 $m \mapsto g \cdot m - m$。$M$ 的**不变量子模**是

$$M^{G} := \bigcap_{g \in G} \ker\bigl(g - 1\bigr) \;\subseteq\; M .$$

$M \mapsto M^{G}$、$f \mapsto f|_{M^{G}}$ 构成**不变量函子**

$$(-)^{G} : R[G]\text{-}\mathbf{Mod} \longrightarrow R\text{-}\mathbf{Mod} .$$
> 陈述续见 [nodes/def.invariant-functor.2.md](./def.invariant-functor.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.invariant-functor.3.md](./def.invariant-functor.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.invariant-functor.4.md](./def.invariant-functor.4.md)

refs: Weibel, An Introduction to Homological Algebra, Chapter 6（不变量函子与群上同调）

> 说明见 `notes/def.invariant-functor.md`

引用：`def.invariant-functor`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
