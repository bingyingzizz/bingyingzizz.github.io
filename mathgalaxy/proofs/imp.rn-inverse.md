# imp.rn-inverse
`imp.rn-inverse` · 推出 · strong 边 · 根 `../`

`def.rn-derivative` Radon–Nikodym 导数与 Lebesgue 分解 + `def.absolute-continuity` 绝对连续 → `cor.rn-inverse` 互为绝对连续时导数互逆

**证明。** $\mu \ll \lambda$ 且 $\lambda \ll \mu$ 时，Radon–Nikodym 导数满足**链式法则**（乘法性）：若 $\nu \ll \mu \ll \rho$，则 $\frac{d\nu}{d\rho} = \frac{d\nu}{d\mu}\cdot\frac{d\mu}{d\rho}$ $\rho$-a.e. ✓。

把它用在 $\nu = \mu = \rho$ 上：
$$\frac{d\mu}{d\lambda}\cdot\frac{d\lambda}{d\mu} = \frac{d\mu}{d\mu} = 1 \quad \text{a.e.},$$
最后一步是因为 $d\mu = 1 \cdot d\mu$，而密度在 a.e. 意义下唯一 ✓。∎
