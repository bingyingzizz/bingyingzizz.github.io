# 对偶函子　`def.dual-functor`
对偶函子 $(-)^{\ast}$
layer 17 · 定义 · 函子与自然变换 · 范畴论+抽象代数
[在星图里打开](../#n=def.dual-functor)　·　[节点索引](../index.md)

**对偶函子** $(-)^{\ast}:\mathbf{Vect}_K^{\mathrm{op}}\to\mathbf{Vect}_K$ 定义如下：

- 对象上 $V\mapsto V^{\ast}=\operatorname{Hom}_K(V,K)$；
- 态射上把 $T:V\to W$ 送到 $T^{\ast}:W^{\ast}\to V^{\ast}$。
> 陈述续见 [nodes/def.dual-functor.2.md](./def.dual-functor.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`def.functor`](../nodes/def.functor.md) 函子：用到了定义 函子　[proofs/dep.dualfunctor-functor.md](../proofs/dep.dualfunctor-functor.md)

- …另有入边，续页见 [nodes/def.dual-functor.3.md](./def.dual-functor.3.md)

refs: Mac Lane, Categories for the Working Mathematician, Ch. II；Lang, Linear Algebra

> 说明见 `notes/def.dual-functor.md`

引用：`def.dual-functor`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
