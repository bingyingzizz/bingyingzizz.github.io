# 可展的判据　`thm.developable-iff-flat`　·　说明
根 `../`

**证明骨架**：

- (1) 与 (2)：$N \propto X_u \times X_v = a'\times b + v\,(b'\times b)$；要求与 $v$ 无关，即 $b'\times b$ 与 $a'\times b$ 平行，等价于 $\det(a',b,b') = 0$。

- (2) 与 (3)：由 $K = \det(h_{ij})/\det(g_{ij})$ 直接算，直纹面上 $\det(h_{ij})$ 与 $\det(a',b,b')^{2}$ 差一个**符号**（未必是正因子：$X = (u,v,uv)$ 给出 $\det h = -1$，而 $\det(a',b,b')^{2} > 0$）—— 但「等于零」不受符号影响，故 $K \equiv 0$ 仍等价于行列式恒为零。只用第二基本形式的具体计算。

- (3) 与 (4)：$K \equiv 0$ 时由常曲率曲面的局部分类（`thm.constant-gauss-curvature` 中 $K = 0$ 情形）得局部等距于平面；反向由 Gauss 绝妙定理（$K$ 是等距不变量，平面的 $K$ 为零）。

⚠️ **含平坦点时第 1 条与第 4 条会脱钩**：存在 $K \equiv 0$、含成片平坦点、却写不成「沿母线切平面不变」的曲面。所以第 4 条应读作「局部等距于平面」，它恒成立。

> 续见 notes/thm.developable-iff-flat.2.md
