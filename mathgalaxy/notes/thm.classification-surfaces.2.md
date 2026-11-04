# 闭曲面分类定理　`thm.classification-surfaces`　·　说明
根 `../`

⭐ **判据（可定向侧）**：$g = \tfrac{1}{2}\operatorname{rank} H_{1}(S;\mathbb{Z})$（`def.genus`），且 $\chi(S) = 2 - 2g$。所以「两个闭可定向曲面同胚 $\iff$ 亏格相同 $\iff$ $\chi$ 相同」——分类定理说的「只有一个整数不变量」。

⭐ **判据（不可定向侧）**：$\chi(S) = 2 - k$，而 $H_{1}(S;\mathbb{Z}) \cong \mathbb{Z}^{k-1} \oplus \mathbb{Z}/2$，所以 $k$ 由「$H_{1}$ 的自由秩加一」和「有没有 2-挠」一起定出。

⚠ **$\chi = 2 - 2g$ 与 $\chi = 2 - k$ 在本图都还不是节点**（上面两条是陈述级的结论）。这两条该各成一个命题节点，排在第三刀。

📌 这条定理是**拓扑**定理：它只说拓扑型。要谈曲率（Gauss–Bonnet：$\int K\,dA = 2\pi\chi$）得先给曲面一个度量 —— 那条桥是 `thm.gauss-bonnet`，与本定理通过 $\chi$ 相认（见下面的类比边）。
