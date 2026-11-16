# 双复形　`def.bicomplex`
双复形
layer 16 · 定义 · 过滤与谱序列 · 同调代数
[在星图里打开](../#n=def.bicomplex)　·　[节点索引](../index.md)

加法范畴里的**双复形**就是**复形的复形**：即 $(\mathbb{Z}, \preceq)^{2}$ 上的图 $(K^{p,q}, d^{p,q}, d'^{p,q})$，使对一切 $p, q$

$$d^{p+1,q} \circ d^{p,q} = 0, \qquad d'^{p,q+1} \circ d'^{p,q} = 0, \qquad d'^{p+1,q} \circ d^{p,q} = d^{p,q+1} \circ d'^{p,q}.$$

## 为什么成立（入边，证明在 proofs/）
- [`def.additive-category`](../nodes/def.additive-category.md) 加法范畴：用到了定义 加法范畴　[proofs/dep.bicomplex-additive.md](../proofs/dep.bicomplex-additive.md)

- …另有入边，续页见 [nodes/def.bicomplex.2.md](./def.bicomplex.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.bicomplex.3.md](./def.bicomplex.3.md)

refs: Weibel, An Introduction to Homological Algebra, Ch. 5 §5.6；Le Stum, Definition 7.2.17

> 说明见 `notes/def.bicomplex.md`

引用：`def.bicomplex`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
