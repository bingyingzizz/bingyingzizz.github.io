# de Rham 上同调　`def.de-rham-complex`　·　续页（第 2 页）
[在星图里打开](../#n=def.de-rham-complex)　·　第 1 页 [nodes/def.de-rham-complex.md](./def.de-rham-complex.md)

## 陈述（续）
由 $\mathrm{d}^{2} = 0$ 得 $\operatorname{im}\mathrm{d} \subseteq \ker\mathrm{d}$。记**闭形式**与**恰当形式**的空间为

$$Z^{k}(M) := \ker\bigl(\mathrm{d} : \Omega^{k}(M) \to \Omega^{k+1}(M)\bigr),$$

$$B^{k}(M) := \operatorname{im}\bigl(\mathrm{d} : \Omega^{k-1}(M) \to \Omega^{k}(M)\bigr),$$

（$\Omega^{-1} := 0$，故 $B^{0} = 0$）。**de Rham 上同调群**是商空间
$$H^{k}_{\mathrm{dR}}(M) := Z^{k}(M) / B^{k}(M).$$

给定光滑映射 $F : N \to M$，拉回给出线性映射 $F^{\ast} : H^{k}_{\mathrm{dR}}(M) \to H^{k}_{\mathrm{dR}}(N)$（因为 $F^{\ast}\mathrm{d} = \mathrm{d}F^{\ast}$，见 `prop.pullback-form-manifold`），且 $(G \circ F)^{\ast} = F^{\ast} \circ G^{\ast}$。

所以 $H^{k}_{\mathrm{dR}}$ 是光滑流形范畴上的**函子**。

> 续见 [nodes/def.de-rham-complex.3.md](./def.de-rham-complex.3.md)
