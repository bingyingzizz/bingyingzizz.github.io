# 双复形　`def.bicomplex`
双复形（Bicomplex）
layer 11 · 定义 · 过滤与谱序列 · 同调代数
[在星图里打开](../#n=def.bicomplex)　·　[节点索引](../index.md)

加法范畴里的**双复形**就是**复形的复形**：即 $(\mathbb{Z}, \preceq)^{2}$ 上的图 $(K^{p,q}, d^{p,q}, d'^{p,q})$，使对一切 $p, q$

$$d^{p+1,q} \circ d^{p,q} = 0, \qquad d'^{p,q+1} \circ d'^{p,q} = 0, \qquad d'^{p+1,q} \circ d^{p,q} = d^{p,q+1} \circ d'^{p,q}.$$

## 为什么成立（入边，证明在 proofs/）
- [`def.cochain-complex`](../nodes/def.cochain-complex.md) 上链复形：用到了定义 上链复形　[proofs/def-dep.bicomplex-complex.md](../proofs/def-dep.bicomplex-complex.md)

## 它能推出什么 / 谁在用它
- 被 [`prop.bicomplex-spectral`](../nodes/prop.bicomplex-spectral.md) 双复形给出谱序列 用

- …另有出边，续页见 [nodes/def.bicomplex.2.md](./def.bicomplex.2.md)

refs: Le Stum, Definition 7.2.17

> 说明见 `notes/def.bicomplex.md`

引用：`def.bicomplex`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
