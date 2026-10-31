# 万有性质 $\implies$ 张量 ⊣ 内 Hom
`imp.tensor-hom-adjunction` · 推出 · strong 边 · 根 `../`

`thm.tensor-universal-property` 张量积的万有性质 → `prop.tensor-hom-adjunction` 张量 ⊣ 内 Hom

由万有性质，对一切 $W, U$：

$$\operatorname{Hom}(W \otimes V, U) \cong \operatorname{Bil}(W, V; U)$$
另一方面，**双线性映射与「取值在线性映射里的线性映射」一一对应**（curry 化）：给定 $B : W \times V \to U$，对每个 $w$ 得到 $B(w, -) \in \operatorname{Hom}(V, U)$，且 $w \mapsto B(w, -)$ 线性 —— 这个对应是双射。于是

$$\operatorname{Bil}(W, V; U) \cong \operatorname{Hom}\bigl( W, \operatorname{Hom}(V, U) \bigr)$$

两式复合即得所要的同构，且逐条验证它对 $W, U$ 自然（同构由「$w \mapsto$ 那个线性映射」显式给出，与别的变元无关）。∎

> 整条证明没有用到 $V$ 的有限维（这是纯范畴论的事实），只用到张量积的万有性质。
