# 万有性质给出 $n$ 重线性型与 $V^{\otimes n}$ 上线性泛函的同构
`imp.derived-multilinear-tensor-dual` · 推出 · strong 边 · 根 `../`

`thm.tensor-universal-property` 张量积的万有性质 → `def.multilinear-form` 多重线性型

$$V \times V^{\otimes n-1} \to K, \qquad (v, w) \mapsto f_{v}(w).$$

对这个双线性映射用二元万有性质，得到唯一的线性 $\widetilde{f} : V\otimes V^{\otimes n-1} \to K$，即 $\widetilde{f}\in\operatorname{Hom}_{K}(V^{\otimes n},K)$；反向把 $\widetilde{f}$ 沿 $\otimes$ 拉回就得到 $f$。两条互逆，故

$$\operatorname{Mult}_{n}(V;K) \cong \operatorname{Hom}_{K}(V^{\otimes n}, K).$$

取定基之后，后者就是「$n$ 维数组 $(f(e_{i_1},\ldots,e_{i_n}))$」。$\blacksquare$

> 这条说明「多重线性型」不是独立的物种：它就是张量幂的对偶空间里的元素，所以多重线性问题可以整块搬进线性代数。
