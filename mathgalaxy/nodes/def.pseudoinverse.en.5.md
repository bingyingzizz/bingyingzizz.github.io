# Moore-Penrose Pseudoinverse　`def.pseudoinverse`
English entry · root `../`
[in graph](../#n=def.pseudoinverse)　·　[Chinese page (authoritative)](./def.pseudoinverse.md)

⭐ **A canonical way to select a solution when uniqueness fails**: When $Ax = b$ is consistent with infinitely many solutions, $A^{+}b$ gives the one of **minimum norm**. When $Ax = b$ is inconsistent, $A^{+}b$ gives a solution of **minimum residual**. The pseudoinverse thus handles both minimum-norm and least-squares solutions.

⚠️ The pseudoinverse **does not** satisfy $(AB)^{+} = B^{+}A^{+}$ in general (it holds only in special cases). This contrasts with the inverse identity $(AB)^{-1} = B^{-1}A^{-1}$ and is the easiest point to misremember.

> continued in nodes/def.pseudoinverse.en.6.md
