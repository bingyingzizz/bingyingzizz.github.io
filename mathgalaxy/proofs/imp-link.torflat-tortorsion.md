# 平坦 $\implies$ 挠积消失 $\implies$ 一阶挠积算出挠子群
`imp-link.torflat-tortorsion` · 推出 · strong 边 · 根 `../`

`prop.tor-flat-vanishing` 平坦与挠积消失 → `thm.tor-torsion` 挠积给出挠元

$\mathbb{Q}$ 在 $\mathbb{Z}$ 上无挠，故平坦 ✓。对两项消解 $0 \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{Q}/\mathbb{Z} \to 0$ 张量 $A$，取长正合列
$$\operatorname{Tor}_{1}^{\mathbb{Z}}(\mathbb{Q}, A) \to \operatorname{Tor}_{1}^{\mathbb{Z}}(\mathbb{Q}/\mathbb{Z}, A) \to \mathbb{Z}\otimes A \xrightarrow{\ \alpha\ } \mathbb{Q}\otimes A .$$
由「平坦 $\implies$ 高次挠积为零」，第一项为零 ✓，于是 $\operatorname{Tor}_{1}(\mathbb{Q}/\mathbb{Z}, A) \cong \ker\alpha$ ✓。
而 $\alpha$ 就是 $a \mapsto a\otimes 1$：若 $ka = 0$ 则 $a\otimes 1 = (ka)\otimes\frac{1}{k} = 0$；反之 $a\otimes 1 = 0$ 迫使 $a$ 有有限阶（把 $\mathbb{Q}$ 的元素写成有限个分母的通分即可看出）✓。故 $\ker\alpha = A_{\mathrm{tors}}$ ✓。∎
