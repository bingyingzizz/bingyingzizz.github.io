# 极坐标的 Christoffel 符号　`ex.polar-christoffel`　·　说明
根 `../`

**怎么算**：$g_{rr} = 1$、$g_{\varphi\varphi} = r^{2}$、$g_{r\varphi} = 0$，逆矩阵是 $g^{rr} = 1$、$g^{\varphi\varphi} = r^{-2}$。代入 $\Gamma^{k}_{ij} = \tfrac{1}{2}g^{kl}(\partial_{i}g_{jl} + \partial_{j}g_{il} - \partial_{l}g_{ij})$：唯一非平凡的导数是 $\partial_{r}g_{\varphi\varphi} = 2r$，于是 $\Gamma^{r}_{\varphi\varphi} = -\tfrac12\cdot 1\cdot 2r$、$\Gamma^{\varphi}_{r\varphi} = \tfrac12 \cdot r^{-2}\cdot 2r$，其余项因为 $g$ 与 $\varphi$ 无关而消失。

⭐ **它为什么值得算**：这些符号是「坐标网格本身在弯」的账，不是空间在弯。所以极坐标下测地线方程 $\ddot r - r\dot\varphi^{2} = 0$、$\ddot\varphi + \tfrac{2}{r}\dot r\dot\varphi = 0$ 给出的仍是**直线**（例如 $r\cos\varphi = $ 常数）—— 平坦空间在坏坐标下的曲率必须算成 $0$，这是检验计算的硬检查。

> 续见 notes/ex.polar-christoffel.2.md
