# 光滑单位分解　`thm.smooth-partition-unity`　·　说明
根 `../`

**第三步：每块上放正鼓包**。固定 $\alpha$。$\overline{V_{\alpha}}$ 紧且含于开集 $W_{\alpha}$，故可取其有限覆盖 $B(x_{j}, s_{j})$，并取 $s_{j}>0$ 使 $B(x_{j}, 2s_{j}) \subseteq W_{\alpha}$；令 $r_{j}=2s_{j}$，则 $B(x_{j}, r_{j}/2)$ 仍覆盖 $\overline{V_{\alpha}}$ 且 $B(x_{j}, r_{j}) \subseteq W_{\alpha}$。在每个球上取鼓包 $\beta_{j} \ge 0$（在 $B(x_{j}, r_{j}/2)$ 内为正、在 $B(x_{j}, r_{j})$ 外为零），令 $\psi_{\alpha} = \sum_{j} \beta_{j}$。则 $\psi_{\alpha} \in C^{\infty}(M)$、$\psi_{\alpha} \ge 0$、$\psi_{\alpha} > 0$ 在 $V_{\alpha}$ 上（每点落在某个 $B(x_{j}, r_{j}/2)$ 里），且 $\operatorname{supp}\psi_{\alpha} \subseteq \bigcup_{j} \overline{B(x_{j}, r_{j})} \subseteq W_{\alpha} \subseteq U_{\alpha}$。

> 续见 notes/thm.smooth-partition-unity.4.md
