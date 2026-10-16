# 伴随双射的自然性　`prop.adjunction-naturality`
命题：$\Phi$ 自然的显式写法
layer 10 · 命题 · 伴随与反射 · 范畴论
[在星图里打开](../#n=prop.adjunction-naturality)　·　[节点索引](../index.md)

伴随双射 $\Phi_{X, X'} : \operatorname{Hom}\bigl(F(X), X'\bigr) \cong \operatorname{Hom}\bigl(X, G(X')\bigr)$ 的自然性说的是：对 $g : Y \to X$、$g' : X' \to Y'$ 与 $f : F(X) \to X'$，有 $\Phi\bigl(g' \circ f 
> 陈述续见 [nodes/prop.adjunction-naturality.2.md](./prop.adjunction-naturality.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/prop.adjunction-naturality.3.md](./prop.adjunction-naturality.3.md)

refs: Le Stum, An introduction to condensed mathematics, Exercise 1.55

## 说明
**证明。** 代 $\Phi(f) = G(f) \circ \eta_{X}$ 与 $\Phi^{-1}(h) = \varepsilon_{X'} \circ F(h)$ ✓，两边都用单位与余单位的自然性即得那条等式 ✓。∎

引用：`prop.adjunction-naturality`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
