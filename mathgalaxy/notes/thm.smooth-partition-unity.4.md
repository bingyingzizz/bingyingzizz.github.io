# 光滑单位分解　`thm.smooth-partition-unity`　·　说明
根 `../`

**第四步：归一化**。由 $\{V_{\alpha}\}$ 覆盖 $M$，每点至少落在一个 $V_{\alpha}$ 里，故 $\Psi = \sum_{\alpha} \psi_{\alpha} > 0$ 处处成立。支撑族 $\{\operatorname{supp}\psi_{\alpha}\}$ 局部有限（它加细了 $\{V_{\alpha}\}$ 的局部有限性），故 $\Psi$ 是局部有限和、光滑。令 $\rho_{\alpha} = \psi_{\alpha}/\Psi$，则 $\rho_{\alpha}$ 光滑、$0 \le \rho_{\alpha} \le 1$、$\operatorname{supp}\rho_{\alpha} = \operatorname{supp}\psi_{\alpha} \subseteq U_{\alpha}$，且 $\sum_{\alpha} \rho_{\alpha} = \Psi/\Psi = 1$。三条要求全齐。∎

**为什么必须「局部有限」**：没有它，$\sum\rho_{\alpha}$ 在某点附近可能有无穷多项非零，和既不一定收敛也不一定光滑。局部有限保证每点附近只有有限多项，于是和是有限和 —— 光滑性、可积性、线性都自动继承。

> 续见 notes/thm.smooth-partition-unity.5.md
