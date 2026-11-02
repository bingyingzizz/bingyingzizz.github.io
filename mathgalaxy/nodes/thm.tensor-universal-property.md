# 张量积的万有性质　`thm.tensor-universal-property`
定理：张量积把双线性映射换成线性映射
layer 12 · 定理 · 多重线性与张量 · 抽象代数
[在星图里打开](../#n=thm.tensor-universal-property)　·　[节点索引](../index.md)

对每个线性映射（更一般地：双线性映射）$B : V \times W \to U$，存在**唯一**的线性映射

$$\widetilde{B} : V \otimes W \to U, \qquad \widetilde{B}(v \otimes w) = B(v, w)$$

反之，任何线性映射 $\widetilde B$ 与 $\otimes$ 复合都给出双线性映射。于是有自然的同构

$$\operatorname{Hom}_K(V \otimes W,\ U) \;\cong\; \operatorname{Bil}(V, W; U)$$
> 陈述续见 [nodes/thm.tensor-universal-property.2.md](./thm.tensor-universal-property.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.tensor-universal-property.3.md](./thm.tensor-universal-property.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.tensor-universal-property.4.md](./thm.tensor-universal-property.4.md)

refs: Lang, Algebra, Ch. XVI

> 说明见 `notes/thm.tensor-universal-property.md`

引用：`thm.tensor-universal-property`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
