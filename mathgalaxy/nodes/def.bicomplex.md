# 双复形　`def.bicomplex`
双复形（Bicomplex）
layer 11 · 定义 · 过滤与谱序列 · 同调代数

加法范畴里的**双复形**就是**复形的复形**：即 $(\mathbb{Z}, \preceq)^{2}$ 上的图 $(K^{p,q}, d^{p,q}, d'^{p,q})$，使对一切 $p, q$

$$d^{p+1,q} \circ d^{p,q} = 0, \qquad d'^{p,q+1} \circ d'^{p,q} = 0, \qquad d'^{p+1,q} \circ d^{p,q} = d^{p,q+1} \circ d'^{p,q}.$$

## 为什么成立（入边，证明在 proofs/）
- `def.cochain-complex` 上链复形：用到了定义 上链复形　proofs/def-dep.bicomplex-complex.md

## 它能推出什么 / 谁在用它
- 被 `cor.grothendieck-spectral` Grothendieck 谱序列 用

> 说明见 `notes/def.bicomplex.md`
